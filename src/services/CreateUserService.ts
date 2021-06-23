import { getCustomRepository } from "typeorm" 
import { UserRespositores } from "../repositories/UsersRepositories"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}
class CreateUserService {
    async execute( {name, email, admin}: IUserRequest ) {
        const userRespository  = getCustomRepository(UserRespositores);

        if (!email) {
            throw new Error("Email incorrect");
        }

        const userAlreadyExists = await userRespository.findOne({
            email,
        });

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const user = userRespository.create({
            name,
            email,
            admin,
        });

        await userRespository.save(user);

        return user;
    }
}

export { CreateUserService }