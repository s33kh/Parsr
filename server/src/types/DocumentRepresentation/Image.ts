/**
 * Copyright 2019 AXA Group Operations S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as fs from 'fs';
import * as path from 'path';
import { BoundingBox } from './BoundingBox';
import { Element } from './Element';

/**
 * Image element represents an image in a document, with the src attribute representing the location of
 * the image.
 */
export class Image extends Element {
  /**
   * Getter src
   * @return {string}
   */
  public get src(): string {
    return this._src;
  }

  /**
   * Setter src
   * @param {string} value
   */
  public set src(value: string) {
    this._src = value;
  }

  /**
   * Getter src
   * @return {string}
   */
  public get refId(): string {
    return this._refId;
  }

  /**
   * Setter src
   * @param {string} value
   */
  public set refId(value: string) {
    this._refId = value;
  }

  /**
   * Getter src
   * @return {string}
   */
  public get xObjId(): string {
    return this._xObjId;
  }

  /**
   * Setter src
   * @param {string} value
   */
  public set xObjId(value: string) {
    this._xObjId = value;
  }

  public content: null = null;
  private _src: string;
  private _refId: string;
  private _xObjId: string;

  constructor(boundingBox: BoundingBox, src?: string, refId?: string) {
    super(boundingBox);
    this.src = src;
    this.refId = refId;
  }

  /**
   * Converts the entire paragraph into a string form with formatting, with spaces between words.
   */
  public toMarkdownImage(assetsFolder: string, docName: string): string {
    const imageName: string = 'img-' + this.xObjId.padStart(4, '0') + '.';
    const paths: string[] = fs.readdirSync(assetsFolder).filter(filename => {
      return path.basename(filename).startsWith(imageName);
    });

    if (paths.length > 0) {
      return '![](assets_' + docName + '/' + paths[0] + ')';
    }
    return '';
  }
}
