const links = async (parent, args, context, info) => {
  const result = await context.db.query.links(
    { where: { id_in: parent.linkIds } },
    info
  );
  return result;
};

module.exports = {
  links
};
