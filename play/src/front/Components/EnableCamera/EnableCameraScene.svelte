<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import type { EnableCameraScene } from "../../Phaser/Login/EnableCameraScene";
    import { EnableCameraSceneName } from "../../Phaser/Login/EnableCameraScene";
    import {
        requestedCameraDeviceIdStore,
        batchGetUserMediaStore,
        cameraListStore,
        localVolumeStore,
        requestedMicrophoneDeviceIdStore,
        microphoneListStore,
        speakerListStore,
        requestedCameraState,
        requestedMicrophoneState,
        speakerSelectedStore,
        localStreamStore,
    } from "../../Stores/MediaStore";
    import type { Game } from "../../Phaser/Game/Game";
    import { LL, locale } from "../../../i18n/i18n-svelte";
    import { myCameraStore, myMicrophoneStore } from "../../Stores/MyMediaStore";
    import { localUserStore } from "../../Connection/LocalUserStore";
    export let game: Game;
    import { gameManager } from "../../Phaser/Game/GameManager";

    import bgMap from "../images/map-exemple.png";
    import HorizontalSoundMeterWidget from "./HorizontalSoundMeterWidget.svelte";
    import SelectMicrophone from "./SelectMicrophone.svelte";
    import SelectCamera from "./SelectCamera.svelte";
    import SelectSpeaker from "./SelectSpeaker.svelte";
    import { IconMicrophoneOn, IconCamera } from "@wa-icons";

    const enableCameraScene = game.scene.getScene(EnableCameraSceneName) as EnableCameraScene;
    const bgColor = gameManager.currentStartedRoom.backgroundColor ?? "#1B2A41";
    let legals = gameManager.currentStartedRoom?.legals ?? {};

    let selectedCamera: string | undefined = undefined;
    let selectedMicrophone: string | undefined = undefined;
    const sound = new Audio("/resources/objects/webrtc-in.mp3");

    let legalStrings: string[] = [];
    if (legals?.termsOfUseUrl) {
        legalStrings.push(
            '<a href="' +
                encodeURI(legals.termsOfUseUrl) +
                '" target="_blank" class="text-white no-underline hover:underline bold hover:text-white">' +
                $LL.login.termsOfUse() +
                "</a>"
        );
    }
    if (legals?.privacyPolicyUrl) {
        legalStrings.push(
            '<a href="' +
                encodeURI(legals.privacyPolicyUrl) +
                '" target="_blank" class="text-white no-underline hover:underline bold hover:text-white">' +
                $LL.login.privacyPolicy() +
                "</a>"
        );
    }
    if (legals?.cookiePolicyUrl) {
        legalStrings.push(
            '<a href="' +
                encodeURI(legals.cookiePolicyUrl) +
                '" target="_blank" class="text-white no-underline hover:underline bold hover:text-white">' +
                $LL.login.cookiePolicy() +
                "</a>"
        );
    }

    let legalString: string | undefined;
    if (legalStrings.length > 0) {
        if (Intl.ListFormat) {
            const formatter = new Intl.ListFormat($locale, { style: "long", type: "conjunction" });
            legalString = formatter.format(legalStrings);
        } else {
            // For old browsers
            legalString = legalStrings.join(", ");
        }
    }

    function submit() {
        selectCamera(selectedCamera);
        selectMicrophone(selectedMicrophone);
        enableCameraScene.login();
    }

    function srcObject(node: HTMLVideoElement, stream: MediaStream) {
        node.srcObject = stream;
        return {
            update(newStream: MediaStream) {
                if (node.srcObject != newStream) {
                    node.srcObject = newStream;
                }
            },
        };
    }

    let stream: MediaStream | undefined;

    const unsubscribeLocalStreamStore = localStreamStore.subscribe((value) => {
        if (value.type === "success") {
            stream = value.stream;

            if (stream !== undefined) {
                const videoTracks = stream.getVideoTracks();
                if (videoTracks.length > 0) {
                    selectedCamera = videoTracks[0].getSettings().deviceId;
                } else {
                    selectedCamera = undefined;
                }
                const audioTracks = stream.getAudioTracks();
                if (audioTracks.length > 0) {
                    selectedMicrophone = audioTracks[0].getSettings().deviceId;
                } else {
                    selectedMicrophone = undefined;
                }
            }
        } else {
            stream = undefined;
            selectedCamera = undefined;
            selectedMicrophone = undefined;
        }
    });

    onDestroy(() => {
        unsubscribeLocalStreamStore();
    });

    onMount(() => {
        //init the component to enable webcam and microphone
        batchGetUserMediaStore.startBatch();
        myCameraStore.set(true);
        myMicrophoneStore.set(true);
        requestedCameraState.enableWebcam();

        requestedMicrophoneState.enableMicrophone();

        batchGetUserMediaStore.commitChanges();
        sound.load();
    });

    function handleSelectCamera(event: CustomEvent<string | undefined>) {
        selectCamera(event.detail);
    }

    function handleSelectMicrophone(event: CustomEvent<string | undefined>) {
        selectMicrophone(event.detail);
    }

    function handleSelectSpeaker(event: CustomEvent<string | undefined>) {
        selectSpeaker(event.detail);
    }

    function selectCamera(newCameraSelected: string | undefined = undefined) {
        selectedCamera = newCameraSelected;
        if (!selectedCamera) {
            localUserStore.setPreferredVideoInputDevice("");
            requestedCameraState.disableWebcam();
            return;
        }
        requestedCameraState.enableWebcam();
        requestedCameraDeviceIdStore.set(selectedCamera);
        localUserStore.setPreferredVideoInputDevice(selectedCamera);
    }

    function selectMicrophone(newMicrophoneSelected: string | undefined = undefined) {
        selectedMicrophone = newMicrophoneSelected;
        if (!selectedMicrophone) {
            localUserStore.setPreferredAudioInputDevice("");
            requestedMicrophoneState.disableMicrophone();
            return;
        }
        requestedMicrophoneState.enableMicrophone();
        requestedMicrophoneDeviceIdStore.set(selectedMicrophone);
        localUserStore.setPreferredAudioInputDevice(selectedMicrophone);
    }

    function selectSpeaker(deviceId: string | undefined) {
        localUserStore.setSpeakerDeviceId(deviceId ?? "");
        speakerSelectedStore.set(deviceId);
    }

    function playSoundClick() {
        sound.play().catch((e) => console.error(e));
    }
    /* eslint-disable svelte/no-at-html-tags */
</script>

<form class="enableCameraScene pointer-events-auto relative z-30 m-0 px-2" on:submit|preventDefault={submit}>
    <section class="flex min-h-dvh">
        <div
            class="text-white justify-center items-center overflow-hidden w-[100vw] container flex flex-col min-h-dvh pb-24 pt-6 lg:pt-4 relative"
        >
            <section class="mb-3 text-center">
                <h2 class="text-lg font-semibold">{$LL.camera.enable.title()}</h2>
                <p class="opacity-50 text-sm w-2/3 m-auto pt-1 hidden md:block">
                    {$LL.camera.enable.start()}
                </p>
            </section>

            <div
                class="flex md:flex-wrap flex-col lg:space-x-3 w-full items-center justify-center lg:flex-row lg:items-stretch lg:px-4 lg:pb-2"
            >
                <!-- MICROPHONE -->

                <SelectMicrophone
                    on:selectDevice={handleSelectMicrophone}
                    deviceList={$microphoneListStore ?? []}
                    selectedDevice={selectedMicrophone}
                >
                    <IconMicrophoneOn font-size="24" slot="icon" />
                    <span slot="title">{$LL.actionbar.subtitle.microphone()}</span>

                    <div class="absolute top-4 start-0 flex justify-center w-full" slot="widget">
                        <HorizontalSoundMeterWidget spectrum={$localVolumeStore} />
                    </div>
                </SelectMicrophone>

                <!-- CAMERA -->
                <SelectCamera
                    on:selectDevice={handleSelectCamera}
                    deviceList={$cameraListStore ?? []}
                    selectedDevice={selectedCamera}
                >
                    <IconCamera font-size="24" slot="icon" />
                    <span slot="title">{$LL.camera.editCam()}</span>
                    <span slot="widget">
                        {#if selectedCamera !== undefined && $localStreamStore.type === "success" && $localStreamStore.stream}
                            <video
                                class="myCamVideoSetup bg-contrast/80 backdrop-blur flex items-center justify-center w-full aspect-video overflow-hidden scale-x-[-1]"
                                use:srcObject={$localStreamStore.stream}
                                autoplay
                                muted
                                playsinline
                            />
                        {:else}
                            <div
                                class="webrtcsetup flex flex-col gap-2 items-center justify-center w-full aspect-video rounded-lg overflow-hidden bg-contrast/50 text-white/40"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M229.66,218.34l-52.06-52.06A88.11,88.11,0,0,0,168,40a8,8,0,0,0,0,16,72,72,0,0,1,62.08,107.73L216.92,150.6A55.88,55.88,0,0,0,184,88a8,8,0,0,0,0,16,40,40,0,0,1,27.55,68.79L198.42,159.66A23.88,23.88,0,0,0,152,144a8,8,0,0,0,0,16,8,8,0,0,1,7.73,10.08L141.66,152A23.86,23.86,0,0,0,128,120a8,8,0,0,0,0,16,8,8,0,0,1,3.68,15.12L21.66,41.34A8,8,0,0,0,10.34,52.66L229.66,229.66a8,8,0,0,0,11.32-11.32ZM40,128A88.1,88.1,0,0,0,128,216a87.36,87.36,0,0,0,33.13-6.45l-15-15A71.51,71.51,0,0,1,128,200,72.08,72.08,0,0,1,56,128a71.51,71.51,0,0,1,4.45-24.13l-15-15A87.36,87.36,0,0,0,40,128Z"/></svg>
                                <span class="text-xs">{$LL.camera.disable()}</span>
                            </div>
                        {/if}
                    </span>
                </SelectCamera>

                <!-- SPEAKER -->
                {#if $speakerSelectedStore != undefined && $speakerListStore && $speakerListStore.length > 0}
                    <SelectSpeaker
                        on:playSound={playSoundClick}
                        on:selectDevice={handleSelectSpeaker}
                        deviceList={$speakerListStore ?? []}
                        selectedDevice={$speakerSelectedStore}
                    />
                {/if}
            </div>
            <div
                class="fixed bottom-0 start-0 !w-[100vw] bg-contrast/80 backdrop-blur-md border border-solid border-t border-b-0 border-x-0 border-white/10"
            >
                <section
                    class="container m-auto p-4 flex flex-col-reverse md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4"
                >
                    <!-- TODO ACTION -->
                    <button type="submit" class="btn btn-secondary w-full md:w-1/2 block"
                        >{$LL.menu.settings.save()}</button
                    >
                </section>
                {#if legalString}
                    <section class="terms-and-conditions h-fit z-40 text-center w-full">
                        <a style="display: none;" href="traduction">Need for traduction</a>
                        <p class="text-white text-xs italic opacity-50">
                            {@html $LL.login.terms({
                                links: legalString,
                            })}
                        </p>
                    </section>
                {/if}
            </div>
        </div>
    </section>
</form>
<div class="absolute start-0 top-0 w-dvw h-dvh bg-cover z-10" style="background-image: url('{bgMap}');" />
<div class="absolute start-0 top-0 w-dvw h-dvh bg-contrast/80 z-20" style="background-color: '{bgColor}';" />

<style lang="scss">
    .enableCameraScene {
        h2 {
            margin: 1px;
        }

        section.text-center {
            text-align: center;
        }
    }
</style>
