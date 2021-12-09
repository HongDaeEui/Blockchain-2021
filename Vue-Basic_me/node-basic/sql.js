module.exports = {
  list: {
    query: "select * from t_person",
  },
  createPerson: {
    query: "insert into t_person set ?",
    //query문이 자동으로 완성되서 들어감
  },
  deletePerson: {
    query: "delete from t_person where id=?",
  },
  updatePerson: {
    query: "update t_person set ? where id=?",
  },
};
