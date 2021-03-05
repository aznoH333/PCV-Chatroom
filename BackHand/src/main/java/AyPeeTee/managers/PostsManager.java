package AyPeeTee.managers;


import AyPeeTee.entities.PostEntity;

import javax.enterprise.context.ApplicationScoped;
import java.util.ArrayList;

@ApplicationScoped
public class PostsManager {

    private ArrayList<PostEntity> users = new ArrayList<>();

    public ArrayList<PostEntity> getAll() {
        return users;
    }

    public PostEntity get(int id) {
        return users.get(id);
    }

    public void create(PostEntity post) {
        post.setId(users.size() + 1);
        users.add(post);
    }

    public void update(PostEntity post, int id) {
        users.remove(id - 1);
        users.add(id - 1, post);
        post.setId(id);
    }

    public void delete(int id) {
        users.remove(id);
    }
}
