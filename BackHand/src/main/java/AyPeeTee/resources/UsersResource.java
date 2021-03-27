package AyPeeTee.resources;

import AyPeeTee.entities.UserEntity;
import AyPeeTee.managers.UsersManager;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("users")
@Produces(MediaType.APPLICATION_JSON)
public class UsersResource {

    @Inject
    private UsersManager postsManager;

    @GET
    @Path("getAll")
    public Response getAll() {
        return Response.ok(postsManager.getAll()).build();
    }

    @GET
    public Response get(@QueryParam("id") int id) {
        return Response.ok(postsManager.get(id - 1)).build();
    }

    @POST
    public Response create(UserEntity post) {
        postsManager.create(post);
        return Response.ok(post).build();
    }

    @PUT
    public Response update(@QueryParam("id") int id, UserEntity post) {
        postsManager.update(post, id);
        return Response.ok(post).build();
    }

    @DELETE
    public Response delete(@QueryParam("id") int id) {
        postsManager.delete(id - 1);
        return Response.ok("User with the id " + id + " was deleted!").build();
    }
}
