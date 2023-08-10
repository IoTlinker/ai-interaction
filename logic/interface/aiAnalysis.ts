import { SessionAxios } from './axiosSession'
import { variables } from '../../config'

export class AiAnalysis {
    public static aiAnalysis = new SessionAxios({ baseURL: variables.AI_ANALYSIS_MS })

    public static async getAnalysis(text: string) {
        const response = await this.aiAnalysis.request({
            method: 'POST',
            url: '/openai',
            data: {
                prompt: 'assistant',
                content: text
            }
        })
        return response.data
    }
}
