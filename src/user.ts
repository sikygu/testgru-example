// Define the User interface
interface User {
  id: number;
  name: string;
  email: string;
}

// Define the UserManager class
class UserManager {
  private users: User[] = [];
  private nextId: number = 1;

  // Add a user
  addUser(name: string, email: string): User {
    const newUser: User = {
      id: this.nextId++,
      name,
      email,
    };
    this.users.push(newUser);
    return newUser;
  }

  // Find a user by ID
  findUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  // Delete a user
  deleteUser(id: number): boolean {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }

  // Get all users
  getAllUsers(): User[] {
    return this.users;
  }
}


export { UserManager };