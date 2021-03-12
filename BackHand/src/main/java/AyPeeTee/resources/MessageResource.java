package AyPeeTee.resources;

import AyPeeTee.entities.MessageEntity;
import AyPeeTee.managers.MessageManager;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("message")
@Produces(MediaType.APPLICATION_JSON)
public class MessageResource {

    @Inject
    private MessageManager messageManager;

    @GET
    @Path("getAll")
    public Response getAll() {
        return Response.ok(messageManager.getAll()).build();
    }

    @GET
    public Response get(@QueryParam("id") int id) {
        return Response.ok(messageManager.get(id - 1)).build();
    }

    @POST
    public Response create(MessageEntity mess) {
        messageManager.create(mess);
        return Response.ok(mess).build();
    }

    @PUT
    public Response update(@QueryParam("id") int id, MessageEntity mess) {
        messageManager.update(mess, id);
        return Response.ok(mess).build();
    }

    @DELETE
    public Response delete(@QueryParam("id") int id) {
        messageManager.delete(id - 1);
        return Response.ok("Message with the id " + id + " was deleted!").build();
    }
}
