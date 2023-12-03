import {Router} from 'express';

const router = Router();

// Tweet CRUD endpoints
//create tweet
router.post('/', (request, response) => {
    response.status(501).json({error: 'Not implemented'});
  });
  
  //list tweets
router.get('/', (request, response) => {
    response.status(501).json({error: 'Not implemented'});
  });
  
  //get one tweet
router.get('/:id', (request, response) => {
    const {id} = request.params;
    response.status(501).json({error: `Not implemented: ${id}`});
  });
  
  //update tweet
router.put('/:id', (request, response) => {
    const {id} = request.params;
    response.status(501).json({error: `Not implemented: ${id}`});
  });
  
  // delete tweet
router.delete('/:id', (request, response) => {
    const {id} = request.params;
    response.status(501).json({error: `Not implemented: ${id}`});
  });

export default router;
