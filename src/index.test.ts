import config from '.';

describe('oxlint default config', () => {
  it('should be defined', () => {
    expect(config).toBeDefined();
  });

  it('should be an object', () => {
    expect(typeof config).toBe('object');
  });

  it('should have plugins array', () => {
    expect(config).toHaveProperty('plugins');
    expect(Array.isArray(config.plugins)).toBe(true);
  });

  it('should have categories object', () => {
    expect(config).toHaveProperty('categories');
    expect(typeof config.categories).toBe('object');
  });

  it('should have rules object', () => {
    expect(config).toHaveProperty('rules');
    expect(typeof config.rules).toBe('object');
  });
});
