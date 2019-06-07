import Snippet from "../model";

const one = (model: any, args: any, context: any) => {
  const id = args.id;

  return Snippet.query().findById(id);
};

const all = (model: any, args: any, context: any) => Snippet.query();

export default { one, all };
