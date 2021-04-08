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
        message.add(mess);
        mess.setId(message.size());
    }

    public void update(MessageEntity mess) {
        message.set(mess.getId()- 1, mess);
        //  message.remove(mess.getId() - 1);
        //  message.add(id - 1, mess);
        //  mess.setId(id);
    }

    public void delete(int id) {
        // message.remove(id);
        message.set(mess.getId()- 1, null);
    }
}

