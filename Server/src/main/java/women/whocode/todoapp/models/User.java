package women.whocode.todoapp.models;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
    public class User extends AbstractEntity {

        private String username;
        private String password;

        @OneToMany(mappedBy = "manufacturer")
        private final List<Task> tasks = new ArrayList<>();

        public User() {
        }

        public User(String username, String password) {
            this.username = username;
            this.password = password;
        }


        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }

