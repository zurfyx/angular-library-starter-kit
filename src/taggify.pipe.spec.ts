import { TaggifyPipe } from './taggify.pipe';

describe('TaggifyPipe', () => {
    let pipe;

    beforeEach(() => {
        pipe = new TaggifyPipe();
    });

    it('should taggify a "hey there"', () => {
        expect(pipe.transform('hey there')).toBe('<hey there>');
    });

    it('should not taggify "<hey there>"', () => {
      expect(pipe.transform('<hey there>')).toBe('<hey there>');
    });

    it('should not taggify "" or null', () => {
      expect(pipe.transform(null)).toBe('');
      expect(pipe.transform('')).toBe('');
    });
});
