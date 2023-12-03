import {Router} from 'express';

const router = Router();

// User CRUD endpoints

//create user
router.post('/', (request, response) => {
    response.status(501).json({error: 'Not implemented'});
  });
  
  //list users
router.get('/', (request, response) => {
    response.status(501).json({error: 'Not implemented'});
  });
  
  //get one user
router.get('/:id', (request, response) => {
    const {id} = request.params;
    response.status(501).json({error: `Not implemented: ${id}`});
  });
  
  //update user
router.put('/:id', (request, response) => {
    const {id} = request.params;
    response.status(501).json({error: `Not implemented: ${id}`});
  });
  
  // delete user
router.delete('/:id', (request, response) => {
    const {id} = request.params;
    response.status(501).json({error: `Not implemented: ${id}`});
  });

export default router;

