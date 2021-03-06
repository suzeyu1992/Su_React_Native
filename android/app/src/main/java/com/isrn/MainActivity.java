package com.isrn;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "IsRN";
    }

     @Override
        public void onBackPressed() {
            super.onBackPressed();
            Intent intent = new Intent(this, DetailActivity.class);
            startActivity(intent);
        }
}
