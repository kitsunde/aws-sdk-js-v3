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

import { CreateAwsLogSourceRequest, CreateAwsLogSourceResponse } from "../models/models_0";
import { de_CreateAwsLogSourceCommand, se_CreateAwsLogSourceCommand } from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 *
 * The input for {@link CreateAwsLogSourceCommand}.
 */
export interface CreateAwsLogSourceCommandInput extends CreateAwsLogSourceRequest {}
/**
 * @public
 *
 * The output of {@link CreateAwsLogSourceCommand}.
 */
export interface CreateAwsLogSourceCommandOutput extends CreateAwsLogSourceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds a natively supported Amazon Web Service as an Amazon Security Lake source. Enables
 *          source types for member accounts in required Amazon Web Services Regions, based on the
 *          parameters you specify. You can choose any source type in any Region for either accounts
 *          that are part of a trusted organization or standalone accounts. At least one of the three
 *          dimensions is a mandatory input to this API. However, you can supply any combination of the
 *          three dimensions to this API. </p>
 *          <p>By default, a dimension refers to the entire set. When you don't provide a dimension,
 *          Security Lake assumes that the missing dimension refers to the entire set. This is overridden
 *          when you supply any one of the inputs. For instance, when you do not specify members, the
 *          API enables all Security Lake member accounts for all sources. Similarly, when you do not
 *          specify Regions, Security Lake is enabled for all the Regions where Security Lake is available as a
 *          service.</p>
 *          <p>You can use this API only to enable natively supported Amazon Web Services as a
 *          source. Use <code>CreateCustomLogSource</code> to enable data collection from a custom
 *          source. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, CreateAwsLogSourceCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, CreateAwsLogSourceCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const input = { // CreateAwsLogSourceRequest
 *   inputOrder: [ // DimensionSet // required
 *     "STRING_VALUE",
 *   ],
 *   enableAllDimensions: { // AllDimensionsMap
 *     "<keys>": { // TwoDimensionsMap
 *       "<keys>": [ // ValueSet
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   enableTwoDimensions: {
 *     "<keys>": [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   enableSingleDimension: [ // InputSet
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateAwsLogSourceCommand(input);
 * const response = await client.send(command);
 * // { // CreateAwsLogSourceResponse
 * //   processing: [ // AccountList
 * //     "STRING_VALUE",
 * //   ],
 * //   failed: [
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateAwsLogSourceCommandInput - {@link CreateAwsLogSourceCommandInput}
 * @returns {@link CreateAwsLogSourceCommandOutput}
 * @see {@link CreateAwsLogSourceCommandInput} for command's `input` shape.
 * @see {@link CreateAwsLogSourceCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Access denied errors appear when Amazon Security Lake explicitly or implicitly denies an authorization
 *          request. An explicit denial occurs when a policy contains a Deny statement for the specific
 *          Amazon Web Services action. An implicit denial occurs when there is no applicable Deny statement and also
 *          no applicable Allow statement.</p>
 *
 * @throws {@link AccountNotFoundException} (client fault)
 *  <p>Amazon Security Lake cannot find an Amazon Web Services account with the accountID that you
 *          specified, or the account whose credentials you used to make this request isn't a member of
 *          an organization.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exceptions are sometimes caused by transient issues. Before you start
 *          troubleshooting, perform the operation again. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link S3Exception} (client fault)
 *  <p>Provides an extension of the AmazonServiceException for errors reported by Amazon S3 while processing a request. In particular, this class provides access to the
 *             Amazon S3 extended request ID. If Amazon S3 is incorrectly handling a
 *          request and you need to contact Amazon, this extended request ID may provide useful
 *          debugging information. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Your signing certificate could not be validated. </p>
 *
 * @throws {@link SecurityLakeServiceException}
 * <p>Base exception class for all service exceptions from SecurityLake service.</p>
 *
 */
export class CreateAwsLogSourceCommand extends $Command<
  CreateAwsLogSourceCommandInput,
  CreateAwsLogSourceCommandOutput,
  SecurityLakeClientResolvedConfig
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
  constructor(readonly input: CreateAwsLogSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAwsLogSourceCommandInput, CreateAwsLogSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAwsLogSourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "CreateAwsLogSourceCommand";
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
  private serialize(input: CreateAwsLogSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAwsLogSourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAwsLogSourceCommandOutput> {
    return de_CreateAwsLogSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
