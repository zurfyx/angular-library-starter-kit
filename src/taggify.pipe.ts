import { Pipe, PipeTransform } from '@angular/core';

/**
 * Wrap between <>
 *
 * Usage:
 * {{str | taggify}}
 *
 * Rules:
 * An empty or null string will never be taggified.
 * A taggified string won't be taggified again.
 * All other string values will be taggified.
 */
@Pipe({
  name: 'taggify'
})
export class TaggifyPipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    if (!value)  {
      return '';
    }
    if (value.startsWith('<') && value.endsWith('>')) {
      return value;
    }
    return `<${value}>`;
  }
}
