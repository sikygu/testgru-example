import { describe, it, expect, beforeEach } from 'vitest';
import { UserManager } from './user';

describe('UserManager', () => {
  let userManager: UserManager;

  beforeEach(() => {
    userManager = new UserManager();
  });

  describe('addUser', () => {
    it('should add a user and return the user object with an id', () => {
      const user = userManager.addUser('John Doe', 'john@example.com');
      expect(user).toEqual({ id: 1, name: 'John Doe', email: 'john@example.com' });
    });

    it('should increment the id for each new user', () => {
      const user1 = userManager.addUser('John Doe', 'john@example.com');
      const user2 = userManager.addUser('Jane Doe', 'jane@example.com');
      expect(user1.id).toBe(1);
      expect(user2.id).toBe(2);
    });
  });

  describe('findUserById', () => {
    it('should find and return a user by id', () => {
      const user = userManager.addUser('John Doe', 'john@example.com');
      const foundUser = userManager.findUserById(user.id);
      expect(foundUser).toEqual(user);
    });

    it('should return undefined if user is not found', () => {
      const foundUser = userManager.findUserById(999);
      expect(foundUser).toBeUndefined();
    });
  });

  describe('deleteUser', () => {
    it('should delete a user by id and return true', () => {
      const user = userManager.addUser('John Doe', 'john@example.com');
      const result = userManager.deleteUser(user.id);
      expect(result).toBe(true);
      expect(userManager.findUserById(user.id)).toBeUndefined();
    });

    it('should return false if user to delete is not found', () => {
      const result = userManager.deleteUser(999);
      expect(result).toBe(false);
    });
  });

  describe('getAllUsers', () => {
    it('should return all users', () => {
      const user1 = userManager.addUser('John Doe', 'john@example.com');
      const user2 = userManager.addUser('Jane Doe', 'jane@example.com');
      const allUsers = userManager.getAllUsers();
      expect(allUsers).toEqual([user1, user2]);
    });

    it('should return an empty array if no users are present', () => {
      const allUsers = userManager.getAllUsers();
      expect(allUsers).toEqual([]);
    });
  });
});
