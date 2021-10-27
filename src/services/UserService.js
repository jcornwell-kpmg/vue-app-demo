import usersData from '@/data/users.json';

class UserService {
    /* constructor() {
      console.log('New UserService');
    } */
    
    getUsers() {
      let usersListPromise = new Promise((resolve/*, reject*/) => {
        setTimeout(function(){
          const users = Array.isArray(usersData) ? usersData : [];
          resolve({ items: users, total: users.length });
        }, 250);
      });

      return usersListPromise;
    }

    getUserDetail(userId) {
      let getUserPromise = new Promise((resolve, reject) => {
        setTimeout(function(){
          const userMatch = Array.isArray(usersData) ? usersData.find(user => user.id === userId) : null;
          
          if(userMatch) {
            resolve(userMatch);
          } else {
            reject({msg: 'The requested record was not fround.'});
          }
        }, 250);
      });

      return getUserPromise;
    }
  }
  
  export default new UserService();