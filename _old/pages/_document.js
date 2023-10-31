import React from 'react'
import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { ServerStyleSheets } from '@material-ui/core/styles'

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const styledSheet = new ServerStyleSheet()
		const materialSheet = new ServerStyleSheets()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						styledSheet.collectStyles(
							materialSheet.collect(<App {...props} />)
						),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				// Styles fragment is rendered after the app and page rendering finish.
				styles: [
					...React.Children.toArray(initialProps.styles),
					materialSheet.getStyleElement(),
					styledSheet.getStyleElement(),
				],
			}
		} finally {
			styledSheet.seal()
		}
	}
}
