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

import { CreateAppRequest, CreateAppResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_CreateAppCommand, se_CreateAppCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateAppCommand}.
 */
export interface CreateAppCommandInput extends CreateAppRequest {}
/**
 * @public
 *
 * The output of {@link CreateAppCommand}.
 */
export interface CreateAppCommandOutput extends CreateAppResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateAppCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateAppCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // CreateAppRequest
 *   CreateApplicationRequest: { // CreateApplicationRequest
 *     Name: "STRING_VALUE", // required
 *     tags: { // MapOf__string
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new CreateAppCommand(input);
 * const response = await client.send(command);
 * // { // CreateAppResponse
 * //   ApplicationResponse: { // ApplicationResponse
 * //     Arn: "STRING_VALUE", // required
 * //     Id: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     tags: { // MapOf__string
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     CreationDate: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAppCommandInput - {@link CreateAppCommandInput}
 * @returns {@link CreateAppCommandOutput}
 * @see {@link CreateAppCommandInput} for command's `input` shape.
 * @see {@link CreateAppCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 */
export class CreateAppCommand extends $Command<
  CreateAppCommandInput,
  CreateAppCommandOutput,
  PinpointClientResolvedConfig
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
  constructor(readonly input: CreateAppCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAppCommandInput, CreateAppCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateAppCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "CreateAppCommand";
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
  private serialize(input: CreateAppCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAppCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAppCommandOutput> {
    return de_CreateAppCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
