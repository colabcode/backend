import SnippetModel from "../model";

const one = (model: any, args: any, context: any) => {
  const id = args.id;

  return SnippetModel.query().findById(id);
};

const all = (model: any, args: any, context: any) => SnippetModel.query();

export default { one, all };
