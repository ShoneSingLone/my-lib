import {
    createElement
} from '../utils/elements';

import {
    isNumber
} from 'util';


/**
 * Preview thumbnails for seek hover and scrubbing
 * Seeking: Hover over the seek bar (desktop only): shows a small preview container above the seek bar
 * Scrubbing: Click and drag the seek bar (desktop and mobile): shows the preview image over the entire video, as if the video is scrubbing at very high speed
 *
 * Notes:
 * - Thumbs are set via JS settings on Plyr init, not HTML5 'track' property. Using the track property would be a bit gross, because it doesn't support custom 'kinds'. kind=metadata might be used for something else, and we want to allow multiple thumbnails tracks. Tracks must have a unique combination of 'kind' and 'label'. We would have to do something like kind=metadata,label=thumbnails1 / kind=metadata,label=thumbnails2. Square peg, round hole
 * - VTT info: the image URL is relative to the VTT, not the current document. But if the url starts with a slash, it will naturally be relative to the current domain. https://support.jwplayer.com/articles/how-to-add-preview-thumbnails
 * - This implementation uses multiple separate img elements. Other implementations use background-image on one element. This would be nice and simple, but Firefox and Safari have flickering issues with replacing backgrounds of larger images. It seems that YouTube perhaps only avoids this because they don't have the option for high-res previews (even the fullscreen ones, when mousedown/seeking). Images appear over the top of each other, and previous ones are discarded once the new ones have been rendered
 */

class PreviewTitle {
    /**
     * PreviewTitle constructor.
     * @param {Plyr} player
     * @return {PreviewTitle}
     */
    constructor(player) {
        this.player = player;
        /* 分段的标题信息 */
        this.titles = [];
        this.loaded = false;

        this.load();
    }

    get enabled() {
        return this.player.isHTML5 && this.player.isVideo && this.player.config.previewTitle && this.player.config.previewTitle.enabled;
    }

    load() {
        // Togglethe regular seek tooltip

        if (!this.enabled) {
            return;
        }
        const {
            items
        } = this.player.config.previewTitle;

        if (!(items && items.length > 0)) {
            throw new Error('Missing previewTitle.items config attribute');
        }
        this.titles = items;
        // Render DOM elements
        this.player.once('canplay', () => {
            this.render();
            this.loaded = true;
        });
    }

    render() {
        const handleClick = event => this.player.currentTime = parseFloat(event.target.dataset.time);
        const getTemplate = (title) => {
            let totalTime = this.player.duration,
                leftValue = 0;
            if (isNumber(totalTime) && totalTime > 0) {
                leftValue = (title.time / totalTime) * 100;
            }

            let eleOuter = createElement('div', {
                class: "progress-hightlights",
                style: `left: ${leftValue}%;`,
                "data-time": title.time
            })

            eleOuter.innerHTML = `
            <div class="progress-hightlights-tips">
               ${title.contents}
            </div>
            `
            // TODO: 需要优化，不必多次appendChild
            eleOuter.onclick = handleClick;
            this.player.elements.progress.appendChild(eleOuter);
        }

        this.titles.forEach(getTemplate);
    }
}

export default PreviewTitle;