
import { DriverInMemoryRepository } from '../infra/repositories/DriverInMemoryRepository';
import { ListAvailableDriversUseCase } from '../core/usecases/ListAvailableDriversUseCase';

describe('ListAvailableDriversUseCase', () => {
  it('returns drivers sorted by ETA', async () => {
    const repo = new DriverInMemoryRepository();
    const uc = new ListAvailableDriversUseCase(repo);
    const drivers = await uc.execute(-8.839, 13.289);
    expect(drivers).toBeDefined();
    expect(Array.isArray(drivers)).toBe(true);
    for (let i = 1; i < drivers.length; i++) {
      expect(drivers[i].etaMinutes).toBeGreaterThanOrEqual(drivers[i-1].etaMinutes);
    }
  });
});
