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

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import {
  DescribeRepositoriesRequest,
  DescribeRepositoriesRequestFilterSensitiveLog,
  DescribeRepositoriesResponse,
  DescribeRepositoriesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeRepositoriesCommand,
  serializeAws_json1_1DescribeRepositoriesCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link DescribeRepositoriesCommand}.
 */
export interface DescribeRepositoriesCommandInput extends DescribeRepositoriesRequest {}
/**
 * The output of {@link DescribeRepositoriesCommand}.
 */
export interface DescribeRepositoriesCommandOutput extends DescribeRepositoriesResponse, __MetadataBearer {}

/**
 * <p>Describes image repositories in a registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DescribeRepositoriesCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DescribeRepositoriesCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new DescribeRepositoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRepositoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeRepositoriesCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 *
 * @example To describe all repositories in the current account
 * ```javascript
 * // The following example obtains a list and description of all repositories in the default registry to which the current user has access.
 * const input = {};
 * const command = new DescribeRepositoriesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "repositories": [
 *     {
 *       "registryId": "012345678910",
 *       "repositoryArn": "arn:aws:ecr:us-west-2:012345678910:repository/ubuntu",
 *       "repositoryName": "ubuntu"
 *     },
 *     {
 *       "registryId": "012345678910",
 *       "repositoryArn": "arn:aws:ecr:us-west-2:012345678910:repository/test",
 *       "repositoryName": "test"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 */
export class DescribeRepositoriesCommand extends $Command<
  DescribeRepositoriesCommandInput,
  DescribeRepositoriesCommandOutput,
  ECRClientResolvedConfig
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

  constructor(readonly input: DescribeRepositoriesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRepositoriesCommandInput, DescribeRepositoriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRepositoriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "DescribeRepositoriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRepositoriesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeRepositoriesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeRepositoriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeRepositoriesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRepositoriesCommandOutput> {
    return deserializeAws_json1_1DescribeRepositoriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
