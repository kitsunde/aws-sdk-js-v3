// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { GetApplicationVersionRequest, GetApplicationVersionResponse } from "../models/models_0";
import { de_GetApplicationVersionCommand, se_GetApplicationVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetApplicationVersionCommand}.
 */
export interface GetApplicationVersionCommandInput extends GetApplicationVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationVersionCommand}.
 */
export interface GetApplicationVersionCommandOutput extends GetApplicationVersionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns details about a specific version of a specific application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, GetApplicationVersionCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, GetApplicationVersionCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * const client = new M2Client(config);
 * const input = { // GetApplicationVersionRequest
 *   applicationId: "STRING_VALUE", // required
 *   applicationVersion: Number("int"), // required
 * };
 * const command = new GetApplicationVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationVersionResponse
 * //   name: "STRING_VALUE", // required
 * //   applicationVersion: Number("int"), // required
 * //   description: "STRING_VALUE",
 * //   definitionContent: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   statusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetApplicationVersionCommandInput - {@link GetApplicationVersionCommandInput}
 * @returns {@link GetApplicationVersionCommandOutput}
 * @see {@link GetApplicationVersionCommandInput} for command's `input` shape.
 * @see {@link GetApplicationVersionCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameters provided in the request is not valid.</p>
 *
 * @throws {@link M2ServiceException}
 * <p>Base exception class for all service exceptions from M2 service.</p>
 *
 */
export class GetApplicationVersionCommand extends $Command<
  GetApplicationVersionCommandInput,
  GetApplicationVersionCommandOutput,
  M2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetApplicationVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: M2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetApplicationVersionCommandInput, GetApplicationVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetApplicationVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "M2Client";
    const commandName = "GetApplicationVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetApplicationVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetApplicationVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetApplicationVersionCommandOutput> {
    return de_GetApplicationVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
