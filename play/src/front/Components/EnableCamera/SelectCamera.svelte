<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { LL } from "../../../i18n/i18n-svelte";
    import { StringUtils } from "../../Utils/StringUtils";
    import { IconCheck, IconVideoOff } from "@wa-icons";

    let editMode = false;
    export let selectedDevice: string | undefined = undefined;
    export let deviceList: MediaDeviceInfo[];
    const dispatch = createEventDispatcher<{
        selectDevice: string | undefined;
    }>();
</script>

<div
    class="px-3 pt-3 pb-2 rounded-xl bg-white/10 mt-3 w-full mx-2 md:mx-0 min-w-[240px] md:min-w-[300px] max-w-[380px] flex flex-col items-center"
>
    <div class="text-lg bold flex items-center justify-center space-x-3 mb-2 ps-2">
        <slot name="icon" />
        <div class="grow pe-8 ps-2">
            <slot name="title" />
        </div>
        <button
            class="btn {!editMode ? 'btn-secondary' : 'btn-light btn-ghost'}"
            on:click|stopPropagation|preventDefault={() => (editMode = !editMode)}
        >
            {!editMode ? $LL.actionbar.edit() : $LL.actionbar.cancel()}
        </button>
    </div>
    <div class="flex items-center justify-center">
        <div class="flex flex-wrap items-center justify-center min-h-[129px]">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
                class="border border-solid border-white w-full rounded-lg m-1 items-center justify-start transition-all overflow-hidden cursor-pointer relative px-4 py-3 space-x-3 {!selectedDevice
                    ? 'bg-white text-secondary border-none'
                    : 'hover:bg-white/10'}"
                class:hidden={!editMode && selectedDevice}
                class:flex,flex-col={editMode || !selectedDevice}
                on:click={() => {
                    dispatch("selectDevice", undefined);
                    editMode = false;
                }}
            >
                {#if !editMode && !selectedDevice}
                    <div
                        class="webrtcsetup flex items-center justify-center h-[120px] w-full aspect-video overflow-hidden bg-contrast/50 rounded-lg"
                    >
                        <IconVideoOff font-size="24" />
                    </div>
                {/if}
                <div class="flex py-2 pe-4 ps-2 items-center space-x-3">
                    <div
                        class="aspect-square me-4 h-6 rounded-full border border-solid border-white flex items-center justify-center"
                        class:bg-secondary={!selectedDevice}
                        class:border-secondary={!selectedDevice}
                    >
                        {#if !selectedDevice}
                            <IconCheck class="text-white" />
                        {/if}
                    </div>
                    <div class="space-y-1">
                        <div class="text-lg bold max-w-[241px] truncate text-ellipsis overflow-hidden leading-tight">
                            {$LL.camera.disable()}
                        </div>
                        {#if !selectedDevice}
                            <span class="chip chip-sm chip-neutral inline rounded-sm">
                                <span class="chip-label">{$LL.camera.active()}</span>
                            </span>
                        {:else}
                            <span class="chip chip-sm chip-neutral inline rounded-sm">
                                <span class="chip-label">{$LL.camera.notRecommended()}</span>
                            </span>
                        {/if}
                    </div>
                </div>
            </div>
            {#each deviceList ?? [] as device (device.deviceId)}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div
                    class="border border-solid w-full rounded-lg relative justify-start m-1 space-x-3 transition-all overflow-hidden cursor-pointer {selectedDevice ===
                    device.deviceId
                        ? 'bg-white text-secondary border-none '
                        : 'border-white hover:bg-white/10'}"
                    class:hidden={!editMode && selectedDevice !== device.deviceId}
                    class:flex,flex-col={editMode || selectedDevice === device.deviceId}
                    on:click={() => {
                        dispatch("selectDevice", device.deviceId);
                        editMode = false;
                    }}
                >
                    {#if !editMode && device.deviceId === selectedDevice}
                        <div class="top-0 left-0 w-full">
                            <slot name="widget" />
                        </div>
                    {/if}
                    <div class="flex py-2 pe-4 ps-2 items-center space-x-3">
                        <div
                            class="aspect-square me-4 h-6 rounded-full border border-solid border-white flex items-center justify-center"
                            class:bg-secondary={selectedDevice === device.deviceId}
                            class:border-secondary={selectedDevice === device.deviceId}
                        >
                            {#if selectedDevice == device.deviceId}
                                <IconCheck class="text-white" />
                            {/if}
                        </div>
                        <div class="space-y-1">
                            <div
                                class="text-lg bold truncate leading-tight"
                                style:width={!editMode && selectedDevice === device.deviceId ? "251px" : "auto"}
                            >
                                {StringUtils.normalizeDeviceName(device.label)}
                            </div>
                            {#if device.deviceId === selectedDevice}
                                <span class="chip chip-sm chip-neutral inline rounded-sm">
                                    <span class="chip-label">{$LL.camera.active()}</span>
                                </span>
                            {:else}
                                <span class="chip chip-sm chip-neutral inline rounded-sm">
                                    <span class="chip-label">{$LL.camera.disabled()}</span>
                                </span>
                            {/if}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
