const mongoDB = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
   // #swagger.description = 'Returns all contacts in the database.'
  const result = await mongoDB.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getOne = async (req, res, next) => {
  // #swagger.description = 'Returns one contact from the database.'
  const userId = new ObjectId(req.params.id);
  const result = await mongoDB.getDb().db().collection('contacts').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createContact = async (req, res, next) => {
  /* #swagger.description = 'Stores a contact in the database.'
  #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Adds a contact',
        schema: {
          $firstName: 'John',
          $lastName: 'Doe',
          $email: 'john.doe@example.com',
          $favoriteColor: 'Blue',
          $birthday: '01/01/00'
        }
  }
  }*/
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongoDB.getDb().db().collection('contacts').insertOne(contact);
  if (response.acknowledged) 
    res.status(201).json(response);
  else 
    res.status(500).json(response.error || 'An error occurred while creating the contact.');
};

const updateContact = async (req, res, next) => {
  /* #swagger.description = 'Updates a contact in the database.'
  #swagger.parameters['id'] = {
        description: 'The ID for the contact to update',
        required: 'true',
        type: 'string'
  }
  #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Updates a contact',
        schema: {
          $firstName: 'John',
          $lastName: 'Doe',
          $email: 'john.doe@example.com',
          $favoriteColor: 'Blue',
          $birthday: '01/01/00'
        }
  }*/
  const userId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongoDB.getDb().db().collection('contacts').replaceOne({ _id: userId }, contact);
  if (response.modifiedCount > 0)
    res.status(204).send();
  else
    res.status(500).json(response.error || 'An error occurred while updating the contact.');
};

const deleteContact = async (req, res, next) => {
  /* #swagger.description = 'Deletes a contact from the database.'
  #swagger.parameters['id'] = {
        description: 'The ID for the contact to delete',
        required: 'true',
        type: 'string'
  }
  */
  const userId = new ObjectId(req.params.id);
  const response = await mongoDB.getDb().db().collection('contacts').deleteOne({ _id: userId }, true);
  if (response.deletedCount > 0)
    res.status(200).send();
  else
    res.status(500).json(response.error || 'An error occurred while deleting the contact.');
};

module.exports = { getAll, getOne, createContact, updateContact, deleteContact };