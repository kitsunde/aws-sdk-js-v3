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

import { CreateAppVersionAppComponentRequest, CreateAppVersionAppComponentResponse } from "../models/models_0";
import {
  de_CreateAppVersionAppComponentCommand,
  se_CreateAppVersionAppComponentCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 *
 * The input for {@link CreateAppVersionAppComponentCommand}.
 */
export interface CreateAppVersionAppComponentCommandInput extends CreateAppVersionAppComponentRequest {}
/**
 * @public
 *
 * The output of {@link CreateAppVersionAppComponentCommand}.
 */
export interface CreateAppVersionAppComponentCommandOutput
  extends CreateAppVersionAppComponentResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a new Application Component in the Resilience Hub application.</p>
 *          <note>
 *             <p>This API updates the Resilience Hub application draft version. To use this Application Component for running assessments, you must publish the Resilience Hub application using the <code>PublishAppVersion</code> API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, CreateAppVersionAppComponentCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, CreateAppVersionAppComponentCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // CreateAppVersionAppComponentRequest
 *   appArn: "STRING_VALUE", // required
 *   id: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   type: "STRING_VALUE", // required
 *   additionalInfo: { // AdditionalInfoMap
 *     "<keys>": [ // AdditionalInfoValueList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateAppVersionAppComponentCommand(input);
 * const response = await client.send(command);
 * // { // CreateAppVersionAppComponentResponse
 * //   appArn: "STRING_VALUE", // required
 * //   appVersion: "STRING_VALUE", // required
 * //   appComponent: { // AppComponent
 * //     name: "STRING_VALUE", // required
 * //     type: "STRING_VALUE", // required
 * //     id: "STRING_VALUE",
 * //     additionalInfo: { // AdditionalInfoMap
 * //       "<keys>": [ // AdditionalInfoValueList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAppVersionAppComponentCommandInput - {@link CreateAppVersionAppComponentCommandInput}
 * @returns {@link CreateAppVersionAppComponentCommandOutput}
 * @see {@link CreateAppVersionAppComponentCommandInput} for command's `input` shape.
 * @see {@link CreateAppVersionAppComponentCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception occurs when a conflict with a previous successful write is detected. This generally occurs
 *       when the previous write did not have time to propagate to the host serving the current
 *       request. A retry (with appropriate backoff logic) is the recommended response to this
 *       exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception occurs when you have exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use Service Quotas to request a service quota increase.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 */
export class CreateAppVersionAppComponentCommand extends $Command<
  CreateAppVersionAppComponentCommandInput,
  CreateAppVersionAppComponentCommandOutput,
  ResiliencehubClientResolvedConfig
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
  constructor(readonly input: CreateAppVersionAppComponentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResiliencehubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAppVersionAppComponentCommandInput, CreateAppVersionAppComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAppVersionAppComponentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResiliencehubClient";
    const commandName = "CreateAppVersionAppComponentCommand";
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
  private serialize(input: CreateAppVersionAppComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAppVersionAppComponentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateAppVersionAppComponentCommandOutput> {
    return de_CreateAppVersionAppComponentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
