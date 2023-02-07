const Client = require("../models/Client");
const FollowUpActions = require("../models/FollowUpActions");

const FollowUpActionsController = {
  async createFollowUpActions(req, res) {
    try {
      let followUpActions = await FollowUpActions.findOne({
        clientId: req.body.clientId,
      });
      if (followUpActions) {
        let dataExists = false;
        if (req.body.call) {
            
          followUpActions.call.forEach((call) => {
            if (
              call.observations === req.body.call[0].observations &&
              call.contactDate === req.body.call[0].contactDate
            ) {
              dataExists = true;
            }
          });
          if (!dataExists) {
            followUpActions.call.push({
              observations: req.body.call[0].observations,
              contactDate: req.body.call[0].contactDate,
            });
          }
        }
        if (req.body.regards) {
          followUpActions.regards.forEach((regard) => {
            if (
              regard.greetingsType === req.body.regards[0].greetingsType &&
              regard.dateOfGreetings === req.body.regards[0].dateOfGreetings
            ) {
              dataExists = true;
            }
          });
          if (!dataExists) {
            followUpActions.regards.push({
              greetingsType: req.body.regards[0].greetingsType,
              dateOfGreetings: req.body.regards[0].dateOfGreetings,
            });
          }
        }
        if (req.body.popBy) {
          followUpActions.popBy.forEach((pop) => {
            if (
              pop.string === req.body.popBy[0].string &&
              pop.date === req.body.popBy[0].date &&
              pop.value === req.body.popBy[0].value
            ) {
              dataExists = true;
            }
          });
          if (!dataExists) {
            followUpActions.popBy.push({
              string: req.body.popBy[0].string,
              date: req.body.popBy[0].date,
              value: req.body.popBy[0].value,
            });
          }
        }
        if (!dataExists) {
          followUpActions = await followUpActions.save();
        }
      } else {
        followUpActions = await FollowUpActions.create({
          ...req.body,
        });
        const client = await Client.findById(req.body.clientId);
        client.followUpActions.push(followUpActions._id);
        await client.save();
      }
      res.status(200).send({
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
