import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import babel from 'rollup-plugin-babel';
export default {
  input: 'src/wrapper.js', // Path relative to package.json
  output: {
    name: 'FixedSkeleton',
    exports: 'named',
  },
  plugins: [
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true, // Explicitly convert template to render function
    }),
    babel({
      babelrc: false,
      comments: true,
      sourceMap: true,
      presets: [
        ["@babel/preset-env", {
          modules: false,
          loose: true,
        }],
      ],
      exclude: 'node_modules/**',
    })
  ],
};
