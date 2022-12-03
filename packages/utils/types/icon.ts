export interface Icon {
  name: string;
  roles: any[];
  id: string;
  require_colons: boolean;
  managed: boolean;
  animated: boolean;
  available: boolean;
  user: User;
}

export interface User {
  id: string;
  username: string;
  avatar: string;
  avatar_decoration: any;
  discriminator: string;
  public_flags: number;
}
