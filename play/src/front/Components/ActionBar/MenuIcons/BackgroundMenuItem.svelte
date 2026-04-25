<script lang="ts">
    import { derived } from "svelte/store";
    import ActionBarButton from "../ActionBarButton.svelte";
    import { requestedCameraState, prewarmBackgroundTransformer } from "../../../Stores/MediaStore";
    import { backgroundConfigStore } from "../../../Stores/BackgroundTransformStore";
    import { mediaSettingsOpenStore, mediaSettingsInitialTabStore } from "../../../Stores/MenuStore";
    import { IconSparkles } from "@wa-icons";

    // Button is "active" highlighted when some effect is applied,
    // "normal" when no effect is applied, "forbidden" when camera is off.
    const buttonStateStore = derived(
        [backgroundConfigStore, requestedCameraState],
        ([$bg, $cam]) => {
            if (!$cam) return "forbidden";
            return $bg.mode === "none" ? "normal" : "active";
        }
    );

    function toggleBackgroundPanel(): void {
        mediaSettingsInitialTabStore.set("background");
        mediaSettingsOpenStore.update((open) => !open);
        // Start loading MediaPipe WASM + model now so the first blur/image
        // tap doesn't freeze the UI for 2–3s.
        prewarmBackgroundTransformer().catch(() => {});
    }
</script>

<ActionBarButton
    on:click={toggleBackgroundPanel}
    state={$buttonStateStore}
    dataTestId="background-effects-button"
    tooltipTitle="Background effects"
    desc="Blur background or replace with an image/video"
    media=""
>
    <IconSparkles />
</ActionBarButton>
