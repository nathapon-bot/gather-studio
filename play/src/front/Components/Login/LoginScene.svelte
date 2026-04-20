<script lang="ts">
    import type { Game } from "../../Phaser/Game/Game";
    import type { LoginScene } from "../../Phaser/Login/LoginScene";
    import { LoginSceneName } from "../../Phaser/Login/LoginScene";
    import { MAX_USERNAME_LENGTH } from "../../Enum/EnvironmentVariable";
    import logoImg from "../images/logo.svg";
    import poweredByWorkAdventureImg from "../images/Powered_By_WorkAdventure_Big.png";
    import bgMap from "../images/map-exemple.png";
    import { gameManager } from "../../Phaser/Game/GameManager";
    import { LL, locale } from "../../../i18n/i18n-svelte";
    import { NameNotValidError, NameTooLongError } from "../../Exception/NameError";

    export let game: Game;

    const loginScene = game.scene.getScene(LoginSceneName) as LoginScene;

    let name = gameManager.getPlayerName() || "";
    let startValidating = false;
    let errorName = "";

    let logo = gameManager.currentStartedRoom.loginSceneLogo ?? logoImg;
    let legals = gameManager.currentStartedRoom?.legals ?? {};

    const sceneBg = gameManager.currentStartedRoom.backgroundSceneImage ?? bgMap;

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

    async function submit() {
        startValidating = true;

        let finalName = name.trim();
        if (finalName !== "") {
            try {
                await loginScene.login(finalName);
            } catch (err) {
                if (err instanceof NameTooLongError) {
                    errorName = $LL.login.input.name.tooLongError();
                } else if (err instanceof NameNotValidError) {
                    errorName = $LL.login.input.name.notValidError();
                } else {
                    errorName = $LL.login.genericError();
                    throw err;
                }
            }
        }
    }

    function getBackgroundColor() {
        if (!gameManager.currentStartedRoom) return undefined;
        return gameManager.currentStartedRoom.backgroundColor;
    }

    /* eslint-disable svelte/no-at-html-tags */
</script>

<section class="self-center absolute z-30 top-0 text-center w-full block">
    <img
        draggable="false"
        src={logo}
        alt="logo"
        class="main-logo mt-6 {gameManager.currentStartedRoom.loginSceneLogo ? 'max-h-[120px] object-cover' : ''}"
        style="width: 160px;"
    />
</section>

<form
    class="loginScene h-dvh flex flex-col items-center justify-center pointer-events-auto relative z-30"
    on:submit|preventDefault={submit}
>
    <div class="w-full sm:w-80 md:w-96 rounded-2xl mx-auto text-center px-6 py-8 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
        <section class="text-center flex h-fit flex-col justify-center items-center mb-0">
            <span class="text-white text-base font-semibold mb-3">
                {$LL.login.input.name.placeholder()}
            </span>
            <!-- svelte-ignore a11y-autofocus -->
            <input
                type="text"
                name="fname"
                data-testid="loginSceneNameInput"
                placeholder={$LL.login.input.name.placeholder()}
                class="w-full h-10 text-sm text-center bg-white/10 text-white rounded-lg border border-solid border-white/30 focus:border-white/60 outline-none mb-0 placeholder-white/40 transition-colors"
                autofocus
                maxlength={MAX_USERNAME_LENGTH}
                bind:value={name}
                on:keypress={() => {
                    startValidating = true;
                }}
                class:border-danger={(name.trim() === "" && startValidating) || errorName !== ""}
            />
            {#if (name.trim() === "" && startValidating) || errorName !== ""}
                <p class="err text-xs text-danger italic pt-1 mb-0">
                    {#if errorName}{errorName}{:else}{$LL.login.input.name.empty()}{/if}
                </p>
            {/if}
        </section>
        <section
            class="action flex h-fit justify-center m-0"
            class:opacity-50={(name.trim() === "" && startValidating) || errorName !== ""}
        >
            <button
                type="submit"
                disabled={(name.trim() === "" && startValidating) || errorName !== ""}
                class="mt-3 w-full font-semibold text-center block btn btn-secondary loginSceneFormSubmit"
                >{$LL.login.continue()}</button
            >
        </section>
        {#if legalString}
            <section class="terms-and-conditions h-fit text-center w-full mt-3">
                <p class="text-white text-xs italic opacity-40">
                    {@html $LL.login.terms({
                        links: legalString,
                    })}
                </p>
            </section>
        {/if}
    </div>
    {#if logo !== logoImg && gameManager.currentStartedRoom.showPoweredBy !== false}
        <section class="text-right flex powered-by justify-center items-end mt-4">
            <img draggable="false" src={poweredByWorkAdventureImg} alt="Powered by WorkAdventure" class="h-10 opacity-60" />
        </section>
    {/if}
</form>
<div
    class="absolute left-0 top-0 w-full h-full z-20 bg-contrast opacity-80"
    style={getBackgroundColor() != undefined ? `background-color: ${getBackgroundColor()};` : ""}
/>
<div class="absolute left-0 top-0 w-full h-full bg-cover z-10" style="background-image: url('{sceneBg}');" />
