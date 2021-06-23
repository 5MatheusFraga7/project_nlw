
import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)
class UserRespositores extends Repository <User> {

}

export { UserRespositores }