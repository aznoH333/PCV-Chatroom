package AyPeeTee.managers;

import AyPeeTee.entities.UserEntity;

import javax.enterprise.context.ApplicationScoped;
import java.util.ArrayList;

@ApplicationScoped
public class UsersManager {

    private ArrayList<UserEntity> users = new ArrayList<>();

    public ArrayList<UserEntity> getAll() {
        return users;
    }

    public UserEntity get(int id) {
        return users.get(id);
    }

    public void create(UserEntity post) {
        post.setId(users.size() + 1);
        users.add(post);
    }

    public void update(UserEntity post, int id) {
        users.remove(id - 1);
        users.add(id - 1, post);
        post.setId(id);
    }

    public void delete(int id) {
        users.remove(id);
    }
}
