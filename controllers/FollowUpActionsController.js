const Client = require("../models/Client");
const FollowUpActions = require("../models/FollowUpActions");

const FollowUpActionsController = {
  async createFollowUpActions(req, res) {
    try {
      let followUpActions = await FollowUpActions.findOne({
        clientId: req.body.clientId,
      });
      if (followUpActions) {
        if (req.body.call) {
          followUpActions.call.push({
            observations: req.body.call[0].observations,
            contactDate: req.body.call[0].contactDate,
          });
        }
        if (req.body.regards) {
          followUpActions.regards.push({
            greetingsType: req.body.regards[0].greetingsType,
            dateOfGreetings: req.body.regards[0].dateOfGreetings,
          });
        }
        if (req.body.popBy) {
          followUpActions.popBy.push({
            string: req.body.popBy[0].string,
            date: req.body.popBy[0].date,
            value: req.body.popBy[0].value,
          });
        }
        followUpActions = await followUpActions.save();
      } else {
        followUpActions = await FollowUpActions.create({
          ...req.body,
        });
        const client = await Client.findById(req.body.clientId);
        client.followUpActions.push(followUpActions._id);
        await client.save();
      }
      res
        .status(200)
        .send({
          msg: "Informacion de seguimiento de acciones del cliente",
          followUpActions,
        });
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async updateFollowUpActions(req, res) {
    try {
      const followUpActions = await FollowUpActions.findByIdAndUpdate(
        req.params._id,
        { ...req.body, ClientId: req.client._id },
        {
          new: true,
        }
      );
      res.send({ message: "Post actualizado con exito", followUpActions });
    } catch (error) {
      console.error(error);
    }
  },
};
module.exports = FollowUpActionsController;
