package women.whocode.todoapp.models;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.Date;

@Entity
public class Task extends AbstractEntity {

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String activity;
    private int accessibility;
    private String type;
    private Date date;
    private String notes;

    public Task(User user, String activity, int accessibility, String type, Date date, String notes) {
        this.user = user;
        this.activity = activity;
        this.accessibility = accessibility;
        this.type = type;
        this.date = date;
        this.notes = notes;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getActivity() {
        return activity;
    }

    public void setActivity(String activity) {
        this.activity = activity;
    }

    public int getAccessibility() {
        return accessibility;
    }

    public void setAccessibility(int accessibility) {
        this.accessibility = accessibility;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    @Override
    public String toString() {
        return "Task{" +
                "user=" + user +
                ", activity='" + activity + '\'' +
                ", accessibility=" + accessibility +
                ", type='" + type + '\'' +
                ", date=" + date +
                ", notes='" + notes + '\'' +
                '}';
    }
}
