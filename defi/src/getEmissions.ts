import { getR2 } from "./utils/r2";
import {
  wrap,
  IResponse,
  notFoundResponse,
  successResponse,
} from "./utils/shared";

const handler = async (event: any): Promise<IResponse> => {
  const protocolName: string = event.pathParameters?.protocol;

  try {
    const data = await getR2(`emissions/${protocolName}`);
    return successResponse(data);
  } catch (e) {
    return notFoundResponse({
      message: `protocol '${protocolName}' has no chart to fetch`,
    });
  }
};

export default wrap(handler);

// async function main() {
//   let a = await handler({ pathParameters: { protocol: "jonesDAO" } });
//   let b = JSON.parse(a.body);
//   let c = JSON.parse(b.body);
//   return;
// }
// main(); // ts-node defi/src/getEmissions.ts