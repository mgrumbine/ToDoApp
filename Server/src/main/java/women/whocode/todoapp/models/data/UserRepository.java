package women.whocode.todoapp.models.data;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import women.whocode.todoapp.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
}
