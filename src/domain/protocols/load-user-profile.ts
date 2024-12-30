import { User } from '../models/user'

export interface LoadUserProfile {
  load: () => Promise<User>
} 
