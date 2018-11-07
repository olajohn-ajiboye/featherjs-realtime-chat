// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const {data} = context;

    // Throw and error if text is not given
    if(!data.text){
      throw new Error('A message must have a text');
    }
    // the authenticated user
    const user = context.params.user;

    // actual text from authienticated user
    const text = context.data.text;

    // Enusre messages aren't longer than 400 Xters
    text = text.substring(0,400);

    // override te original data (so that user can't add junks)

    context.data = {
      text,
      // set the user id
      userId: user. _id,
      createdAt: new Date().getTime()
    }

    return context;
  };
};
