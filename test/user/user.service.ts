import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>
  ) {}

  findAll() {
    return this.repository.find();
  }

  findById(id: number) {
    return this.repository.findOne(id);
  }

  create(data: User) {
    const item = new User();
    item.foo = "bar";
    return this.repository.save(item);
  }

  update(id: number, data: User) {
    return this.repository.update(id, data);
  }

  delete(id: number) {
    return this.repository.delete(id);
  }
}
