import { describe, it, expect, beforeEach } from 'vitest';
import { UserManager } from './user';

describe('UserManager', () => {
  let userManager: UserManager;

  beforeEach(() => {
    userManager = new UserManager();
  });

  it('should add a user and return the newly added user', () => {
    const user = userManager.addUser('John Doe', 'john@example.com');
    expect(user).toEqual({ id: 1, name: 'John Doe', email: 'john@example.com' });
  });

  it('should find a user by ID', () => {
    const user = userManager.addUser('Jane Doe', 'jane@example.com');
    const foundUser = userManager.findUserById(user.id);
    expect(foundUser).toEqual(user);
  });

  it('should return undefined when finding a non-existent user by ID', () => {
    const foundUser = userManager.findUserById(999);
    expect(foundUser).toBeUndefined();
  });

  it('should delete a user by ID and return true', () => {
    const user = userManager.addUser('Alice', 'alice@example.com');
    const result = userManager.deleteUser(user.id);
    expect(result).toBe(true);
    expect(userManager.findUserById(user.id)).toBeUndefined();
  });

  it('should return false when trying to delete a non-existent user', () => {
    const result = userManager.deleteUser(999);
    expect(result).toBe(false);
  });

  it('should return all users', () => {
    const user1 = userManager.addUser('Bob', 'bob@example.com');
    const user2 = userManager.addUser('Charlie', 'charlie@example.com');
    const allUsers = userManager.getAllUsers();
    expect(allUsers).toEqual([user1, user2]);
  });

  it('should return an empty array when there are no users', () => {
    const allUsers = userManager.getAllUsers();
    expect(allUsers).toEqual([]);
  });
});
