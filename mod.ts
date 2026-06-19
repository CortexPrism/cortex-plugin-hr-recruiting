// deno-lint-ignore-file require-await, no-unused-vars
import type { PluginContext, Tool, ToolResult } from 'cortex/plugins';
function ok(n: string, o: unknown, s: number): ToolResult {
  return {
    toolName: n,
    success: true,
    output: JSON.stringify(o, null, 2),
    durationMs: Date.now() - s,
  };
}

const hr_list_candidatesTool: Tool = {
  definition: {
    name: 'hr_list_candidates',
    description: 'List candidates by pipeline stage',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[hr-recruiting] hr_list_candidates executed');
      return ok('hr_list_candidates', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'hr_list_candidates',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const hr_screen_resumeTool: Tool = {
  definition: {
    name: 'hr_screen_resume',
    description: 'Screen resume against job description',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[hr-recruiting] hr_screen_resume executed');
      return ok('hr_screen_resume', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'hr_screen_resume',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const hr_schedule_interviewTool: Tool = {
  definition: {
    name: 'hr_schedule_interview',
    description: 'Schedule interview with candidate',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[hr-recruiting] hr_schedule_interview executed');
      return ok('hr_schedule_interview', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'hr_schedule_interview',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const hr_create_offerTool: Tool = {
  definition: {
    name: 'hr_create_offer',
    description: 'Generate offer letter from template',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[hr-recruiting] hr_create_offer executed');
      return ok('hr_create_offer', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'hr_create_offer',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

export async function onLoad(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-hr-recruiting] Loaded');
}
export async function onUnload(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-hr-recruiting] Unloading...');
}
export const tools: Tool[] = [
  hr_list_candidatesTool,
  hr_screen_resumeTool,
  hr_schedule_interviewTool,
  hr_create_offerTool,
];
