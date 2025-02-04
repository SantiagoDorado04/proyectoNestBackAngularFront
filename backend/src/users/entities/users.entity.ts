import { Column, Entity, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';
import { IUser } from '../../interfaces/user.interface';
import { BaseEntity } from '../../config/base.entity';
import { ROLES } from '../../constants/roles';

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity implements IUser {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ type: 'enum', enum: ROLES })
  role: ROLES;

  @Column({ unique: true })
  area_id: string;
}