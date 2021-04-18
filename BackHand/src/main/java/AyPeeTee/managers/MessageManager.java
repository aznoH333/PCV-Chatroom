package AyPeeTee.managers;

import AyPeeTee.entities.MessageEntity;

import javax.enterprise.context.ApplicationScoped;
import java.util.ArrayList;

@ApplicationScoped
public class MessageManager {

    private ArrayList<MessageEntity> message = new ArrayList<>();

    public ArrayList<MessageEntity> getAll() {
        return message;
    }

    public MessageEntity get(int id) {
        return message.get(id);
    }

    public void create(MessageEntity mess) {
        int lastId;
        if (message.size() == 0) {
            lastId = 0;
        }
        else {
            lastId = message.get(message.size() - 1).getId();
        }
        mess.setId(lastId + 1);
        message.add(mess);
    }

    public void update(MessageEntity mess, int id) {
        message.remove(mess.getId() - 1);
        message.add(id - 1, mess);
        mess.setId(id);
    }

    public void delete(int id) {
        message.remove(id);
    }
}
