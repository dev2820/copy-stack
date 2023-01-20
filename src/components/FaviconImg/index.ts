import { LitElement, css, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import getFaviconUrl from "@/utils/getFaviconUrl";
import noImage from "@/assets/images/no-image.jpg";

import "@/components/FilledCard";
import "@/components/FilledButton";
import "@/components/TextButton";
import "@/components/CopyMenu";

@customElement("favicon-img")
export default class FaviconImg extends LitElement {
  @property({ type: String })
  domain!: string;

  @property({ type: Number })
  size: number = 32;

  @query("img.favicon")
  $favicon!: HTMLImageElement;

  constructor() {
    super();
  }
  render() {
    return html` <img
      class="favicon"
      @error="${this.#showNoImage}"
      src="${getFaviconUrl(this.domain, this.size)}"
      width="${this.size}"
      height="${this.size}"
    />`;
  }

  #showNoImage() {
    this.$favicon.src = noImage;
  }
  static styles = css`
    :host {
      display: inline-block;
      line-height: 2rem;
    }
    img.favicon {
      object-fit: cover;
      aspect-ratio: 1/1;
    }
  `;
}
