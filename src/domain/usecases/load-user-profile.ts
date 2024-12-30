import { User } from '../models/user'

export interface LoadUserProfile {
  load: (username: string) => Promise<User>
} 
