package women.whocode.todoapp.models;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

public abstract class AbstractEntity {
    @Id
    @GeneratedValue
    private int id;

    public int getId() {
        return id;
    }
}
