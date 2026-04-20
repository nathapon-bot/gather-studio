<script lang="ts">
    const SLOTS = $$props.$$slots;
    export let extraClasses = "";
    export let fullContent = false;
    export let reduceOnSmallScreen = false;
    /** When false, the buttons wrapper is hidden even if slot "buttons" has content. Default true. */
    export let showButtons = true;
</script>

<div
    class="popup-container bg-contrast/90 flex flex-col backdrop-blur-md text-white rounded-lg overflow-hidden transition-all animation z-20 shadow-md {extraClasses}"
    class:responsive={reduceOnSmallScreen}
>
    <div class="flex items-center p-2 px-3 pointer-events-auto justify-center grow">
        <div class="text-center text-xs leading-4 responsive-message {fullContent ? 'w-full' : ''}">
            <slot />
        </div>
    </div>
    {#if showButtons && SLOTS.buttons}
        <div class="buttons-wrapper flex items-center justify-center px-3 pb-2 space-x-2 bg-contrast/50 pointer-events-auto">
            <slot name="buttons" />
        </div>
    {/if}
</div>

<style lang="scss">
    .animation {
        animation-duration: 0.5s;
        animation-name: slidein;
    }

    @keyframes slidein {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
</style>
